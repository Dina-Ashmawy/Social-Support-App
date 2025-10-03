import React from "react";
import { List, Button, Tag, Space } from "antd";
import { useTranslation } from "react-i18next";
import type { DraftEntry } from "../types";

type Props = {
  drafts: DraftEntry[];
  onResume: (id: string) => void;
  onDelete: (id: string) => void;
  totalSteps?: number; // defaults to 3 if not provided
};

const DraftsList: React.FC<Props> = ({
  drafts,
  onResume,
  onDelete,
  totalSteps = 3,
}) => {
  const { t } = useTranslation();

  const stepLabel = (index: number) => ` ${index + 1}/${totalSteps}`;

  return (
    <List
      aria-label={t("savedDrafts")}
      dataSource={drafts}
      renderItem={(d) => {
        const when = new Date(d.updatedAt).toLocaleString();
        return (
          <List.Item
            actions={[
              <Button
                key="resume"
                type="link"
                onClick={() => onResume(d.id)}
                aria-label={`${t("resume")} ${t("draft")} ${d.id}`}
              >
                {t("resume")}
              </Button>,
              <Button
                key="delete"
                type="link"
                danger
                onClick={() => onDelete(d.id)}
                aria-label={`${t("delete")} ${t("draft")} ${d.id}`}
              >
                {t("delete")}
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <Space size="small">
                  <span>
                    {t("draft")} {d.id.slice(0, 6)}
                  </span>
                  <Tag>
                    {t("step")}
                    {stepLabel(d.stepIndex)}
                  </Tag>
                </Space>
              }
              description={`${t("savedAt")} ${when}`}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default DraftsList;
