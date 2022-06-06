type Language = "typescript" | "python" | "java" | "unknown";

type Block = {
  startLine: number;
  endLine: number;
  language: Language;
  content: string;
};

export const identifyBlocks = (markdown: string): Block[] => {
  const output: Block[] = [];
  return output;
};

export const prettifyBlock = (block: Block) => {};

export const reInsertBlock = (markdown: string, block: Block) => {};


export const prettifyMarkdown = (markdown: string): string => {
    const output = '';


    return output;
}