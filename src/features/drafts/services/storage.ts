import type { RootState } from "../../../store";
import type { DraftEntry } from "../types";

const LS_KEY = "social_support_draft";

function readDrafts(): DraftEntry[] {
  return JSON.parse(localStorage.getItem(LS_KEY) || "[]") as DraftEntry[];
}

function writeDrafts(drafts: DraftEntry[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(drafts));
}

export function listDrafts(): DraftEntry[] {
  return readDrafts().sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getDraft(id: string): DraftEntry | undefined {
  return readDrafts().find((d) => d.id === id);
}

export function createDraft(state: RootState, stepIndex: number): string {
  const drafts = readDrafts();
  const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  drafts.push({
    id,
    updatedAt: Date.now(),
    stepIndex,
    data: state,
  });
  writeDrafts(drafts);
  return id;
}

export function updateDraft(
  id: string,
  state: RootState,
  stepIndex: number
): boolean {
  const drafts = readDrafts();
  const i = drafts.findIndex((d) => d.id === id);
  if (i === -1) return false;
  drafts[i] = { id, updatedAt: Date.now(), stepIndex, data: state };
  writeDrafts(drafts);
  return true;
}

export function deleteDraft(id: string): boolean {
  const before = readDrafts();
  const after = before.filter((d) => d.id !== id);
  writeDrafts(after);
  return after.length !== before.length;
}
