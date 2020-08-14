import Link from "next/link";
import { MainLayout } from "../layout/MainLayout";

export default function Contact() {
  return (
    <MainLayout title={"contact"}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
