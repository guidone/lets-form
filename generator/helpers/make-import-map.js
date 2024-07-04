
const makeImportMap = importMap => `{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom": "https://esm.sh/react-dom@18.2.0",
    "antd-rate": "https://esm.sh/antd?external=react,react-dom",
    "testcmp": "https://cdn.jsdelivr.net/npm/react-simple-star-rating@5.1.7/+esm"
  }
}`;

export { makeImportMap }