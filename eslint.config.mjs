import nextConfig from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescriptConfig from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "public/assets/**",
      "next-env.d.ts",
    ],
  },
  ...nextConfig,
  ...nextCoreWebVitals,
  ...nextTypescriptConfig,
];

export default eslintConfig;
