import "../globals.css";
import Link from "next/link";

export default function ReceiptsPage() {
  return (
    <div>
      <Link href="../">
        <button className="button">Back to home</button>
      </Link>
      <div className="container-wrapper">
        <div className="container">Container 1</div>
      </div>
    </div>
  );
}
