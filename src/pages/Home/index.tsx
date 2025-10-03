import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Modal, Typography, Space, Empty } from "antd";
import { useTranslation } from "react-i18next";
import type { DraftEntry } from "../../features/drafts/types";
import {
  deleteDraft,
  listDrafts,
} from "../../features/drafts/services/storage";
import DraftsList from "../../features/drafts/ui/DraftsList";

const TOTAL_STEPS = 3;

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [drafts, setDrafts] = useState<DraftEntry[]>([]);

  const refresh = () => setDrafts(listDrafts());

  useEffect(() => {
    refresh();
  }, []);

  const createNew = () => navigate("/createApp?new=1");
  const resume = (id: string) => navigate(`/createApp?draftId=${id}`);

  const remove = (id: string) =>
    Modal.confirm({
      title: t("deleteDraft"),
      okText: t("delete"),
      cancelText: t("cancel"),
      onOk: () => {
        const ok = deleteDraft(id);
        if (ok) refresh();
      },
    });

  return (
    <main role="main" style={{ maxWidth: 720, margin: "24px auto" }}>
      <div style={{ textAlign: "right", marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={createNew}
          aria-label={t("createNewApp")}
        >
          {t("createNewApp")}
        </Button>
      </div>

      <Card title={t("savedDrafts")}>
        {drafts.length === 0 ? (
          <Empty
            description={
              <Space direction="vertical" size={2}>
                <Typography.Text type="secondary">
                  {t("noDrafts")}
                </Typography.Text>
                <Button type="link" onClick={createNew}>
                  {t("createNewApp")}
                </Button>
              </Space>
            }
          />
        ) : (
          <DraftsList
            drafts={drafts}
            onResume={resume}
            onDelete={remove}
            totalSteps={TOTAL_STEPS}
          />
        )}
      </Card>
    </main>
  );
}
