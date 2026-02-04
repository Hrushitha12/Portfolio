from flask import Flask, jsonify, request
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)  # allow requests from your React site during dev

@app.get("/api/health")
def health():
    return jsonify({"ok": True, "service": "portfolio-api", "ts": datetime.datetime.utcnow().isoformat()})

@app.get("/api/projects")
def projects():
    # keep it simple: return a few items that match your portfolio
    return jsonify([
        {"title": "Smart Parking Analytics", "tags": ["python", "pyspark", "dashboard"]},
        {"title": "ML Reliability Monitoring", "tags": ["monitoring", "metrics", "automation"]},
        {"title": "Portfolio Contact Workflow", "tags": ["react", "rest", "google-apps-script"]}
    ])

@app.post("/api/templated-email")
def templated_email():
    data = request.get_json(force=True) or {}
    name = (data.get("name") or "there").strip()
    role = (data.get("role") or "staff").strip()

    # Example of “templated communications” (JD keyword)
    msg = f"Hi {name},\\n\\nThanks for reaching out. This message was generated from a template for {role}.\\n\\nBest,\\nHrushitha"
    return jsonify({"ok": True, "message": msg})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
