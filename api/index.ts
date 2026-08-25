import app from "../server";

export default function handler(req: any, res: any) {
  try {
    return app(req, res);
  } catch (err: any) {
    console.error("Vercel Serverless Function Execution Error:", err);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        error: "Terjadi kesalahan eksekusi pada Vercel Serverless Function.",
        message: err?.message || String(err),
      });
    }
  }
}
