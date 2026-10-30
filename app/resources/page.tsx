import type { Metadata } from "next";
import ResourcesIndex from "../../components/ResourcesIndex";

export const metadata: Metadata = {
  title: "Tools and Resources",
};

export default function ResourcesPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Tools and Resources</h1>
      <ResourcesIndex />
    </div>
  );
}
