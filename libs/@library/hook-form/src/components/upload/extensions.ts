import { MIME_TYPES } from "@inexture/dropzone";

export interface FileIcon {
  mime: string;
  icon: string;
  extension: string;
}
export const fileIConsStatic: FileIcon[] = [
  {
    mime: MIME_TYPES.png,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988256/png_bxqrzw.svg",
    extension: "png",
  },
  {
    mime: MIME_TYPES.jpeg,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988253/jpg_lpdj4l.svg",
    extension: "jpg",
  },
  {
    mime: MIME_TYPES.svg,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988253/svg_rrtlvf.svg",
    extension: "svg",
  },
  {
    mime: MIME_TYPES.webp,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988256/webp_uptawq.svg",
    extension: "webp",
  },
  {
    mime: MIME_TYPES.pdf,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988253/pdf_nummaj.svg",
    extension: "pdf",
  },
  {
    mime: MIME_TYPES.xls,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988256/xls_w2jyrs.svg",
    extension: "xls,",
  },
  {
    mime: MIME_TYPES.xlsx,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988256/xls_w2jyrs.svg",
    extension: "xlsx",
  },
  {
    mime: MIME_TYPES.doc,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988253/doc_dzfl2h.svg",
    extension: "doc",
  },
  {
    mime: MIME_TYPES.docx,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988253/doc_dzfl2h.svg",
    extension: "docx",
  },
  {
    mime: MIME_TYPES.ppt,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988255/ppt_si7zfh.svg",
    extension: "ppt",
  },
  {
    mime: MIME_TYPES.pptx,
    icon: "https://res.cloudinary.com/daoqyyrrh/image/upload/v1733988255/ppt_si7zfh.svg",
    extension: "pptx",
  },
];

export const createPreviewUrl = (file: File): string =>
  URL.createObjectURL(file);

export const getFileIcon = (file: File): string | undefined =>
  fileIConsStatic.find((item) => item.mime === file.type)?.icon;

export const getFileInfo = (file: File) => {
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
  const fileName = file.name;
  return { fileSizeMB, fileName };
};

export const extractFileNameAndExtensionFromUrl = (url: string) => {
  const urlParts = url.split("/");
  const fileNameWithQueryParams = urlParts[urlParts.length - 1].split("?")[0];
  const fileNameParts = fileNameWithQueryParams.split(".");
  const fileName = decodeURIComponent(fileNameParts[0]);
  const extension = fileNameParts.slice(1).join(".");
  return {
    url,
    fileName,
    extension,
  };
};
