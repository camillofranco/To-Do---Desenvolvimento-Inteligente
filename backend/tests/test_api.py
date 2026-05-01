"""Backend API tests for To,Do institutional site."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://corporate-connect-24.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Projects -----
class TestProjects:
    def test_get_projects_returns_6(self, client):
        r = client.get(f"{API}/projects", timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        assert len(data) == 6

    def test_project_fields_and_highlight(self, client):
        r = client.get(f"{API}/projects", timeout=30)
        data = r.json()
        required = {"id", "title", "category", "description", "image", "tags", "year", "highlight"}
        for p in data:
            assert required.issubset(p.keys()), f"Missing fields in {p}"
            assert isinstance(p["tags"], list)
        highlights = [p for p in data if p["highlight"] is True]
        assert len(highlights) >= 1


# ----- Services -----
class TestServices:
    def test_get_services_returns_6(self, client):
        r = client.get(f"{API}/services", timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        assert len(data) == 6

    def test_service_fields(self, client):
        r = client.get(f"{API}/services", timeout=30)
        data = r.json()
        required = {"id", "icon", "title", "description", "deliverables"}
        for s in data:
            assert required.issubset(s.keys())
            assert isinstance(s["deliverables"], list)
            assert len(s["deliverables"]) >= 1


# ----- Contact -----
class TestContact:
    def test_contact_valid_persists(self, client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST User {unique}",
            "email": f"test_{unique}@example.com",
            "company": "TEST Co",
            "message": "Mensagem de teste automatizado com mais de dez caracteres.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=30)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["message"] == payload["message"]
        assert "id" in data and len(data["id"]) > 0
        assert "created_at" in data
        assert "_id" not in data

        # GET list to verify persistence
        g = client.get(f"{API}/contact", timeout=30)
        assert g.status_code == 200
        items = g.json()
        assert any(c.get("id") == data["id"] for c in items)
        for c in items:
            assert "_id" not in c

    def test_contact_invalid_short_name(self, client):
        payload = {"name": "A", "email": "a@b.com", "message": "mensagem longa o suficiente"}
        r = client.post(f"{API}/contact", json=payload, timeout=30)
        assert r.status_code == 422

    def test_contact_invalid_email(self, client):
        payload = {"name": "Valid Name", "email": "not-an-email", "message": "mensagem longa o suficiente"}
        r = client.post(f"{API}/contact", json=payload, timeout=30)
        assert r.status_code == 422

    def test_contact_invalid_short_message(self, client):
        payload = {"name": "Valid Name", "email": "a@b.com", "message": "curta"}
        r = client.post(f"{API}/contact", json=payload, timeout=30)
        assert r.status_code == 422


# ----- Status legacy -----
class TestStatus:
    def test_status_post_and_get(self, client):
        payload = {"client_name": f"TEST_{uuid.uuid4().hex[:6]}"}
        r = client.post(f"{API}/status", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["client_name"] == payload["client_name"]
        assert "id" in data
        g = client.get(f"{API}/status", timeout=30)
        assert g.status_code == 200
        assert isinstance(g.json(), list)
