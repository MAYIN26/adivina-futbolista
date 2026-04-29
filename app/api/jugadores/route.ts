import { db } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM jugadores");
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const body = await request.json();

  await db.query(
    "INSERT INTO jugadores (nombre, imagen, respuestas) VALUES (?, ?, ?)",
    [body.nombre, body.imagen, body.respuestas]
  );

  return NextResponse.json({ mensaje: "Jugador agregado" });
}