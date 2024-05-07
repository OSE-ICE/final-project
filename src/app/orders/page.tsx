"use client";
import Link from "next/link";
import "../globals.css";
import React, { useState } from "react";

export default function OrdersPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          <form>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Time:
              <input
                type="time"
                min="16:00"
                max="23:00"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              People:
              <input
                type="number"
                min="1"
                max="10"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
            </label>
            <br />
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <br />
            <Link href="../receipts">
              <button className="button">Receipt</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
