export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const samples = {
  title: ["Dossier", "Article", "Fichier", "Action", "Alerte"],
  tags: [
    "action",
    "urgent",
    "error",
    "warning",
    "closed",
    "todo",
    "doing",
    "wontfix",
  ],
};

export const getBadgeVariant = (value) => {
  if (value === "error") {
    return "danger";
  } else if (value === "warning") {
    return "warning";
  } else if (value === "urgent") {
    return "info";
  } else if (value === "closed") {
    return "success";
  }
  return "primary";
};