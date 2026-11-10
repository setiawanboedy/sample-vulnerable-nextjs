# Vulnerable Next.js 14 Testbed

Repositori contoh ini dibuat khusus sebagai target pemindaian dan perbaikan otomatis bagi **Autonomous Security Auditing & Auto-Remediation Bot**.

---

## 🎯 Daftar Kerentanan Terpasang (Planted Vulnerabilities)

### 1. SCA (Software Composition Analysis) - Trivy Scanner Target
* **`nanoid@3.3.7` (CVE-2024-21538)**
  * **Tingkat Keparahan**: `HIGH`
  * **Deskripsi**: Predictable ID generation in non-secure environments.
  * **Target File**: `package.json`, `package-lock.json`
  * **Reachability Status**: **Reachable** (Aktif di-import dan dipanggil di `app/page.jsx`).
  * **Perbaikan**: Bump versi ke `^3.3.8`.

* **`path-to-regexp@0.1.7` (CVE-2024-45296)**
  * **Tingkat Keparahan**: `CRITICAL`
  * **Deskripsi**: Regular Expression Denial of Service (ReDoS) via catastrophic backtracking.
  * **Target File**: `package.json`, `package-lock.json`
  * **Reachability Status**: **Unreachable** / Dead dependency (tidak di-import di kode aplikasi).
  * **Perbaikan**: Diabaikan atau di-bump saat lockfile diperbarui.

---

### 2. SAST (Static Application Security Testing) - Semgrep Scanner Target
* **Cross-Site Scripting (XSS) via Raw HTML Injection**
  * **File**: `app/page.jsx`
  * **Aturan Semgrep**: `react.security.audit.react-dangerouslysetinnerhtml`
  * **Deskripsi**: Penggunaan `dangerouslySetInnerHTML` dengan input langsung dari `searchParams` tanpa sanitasi.

* **SQL Injection Pattern**
  * **File**: `lib/search.js`
  * **Aturan Semgrep**: `javascript.express.security.audit.sqli` / string concatenation query
  * **Deskripsi**: Konkatenasi string langsung parameter `keyword` ke dalam query SQL.

---

## 🧪 Menjalankan Unit Test Terisolasi
Repositori ini menggunakan built-in Node.js test runner (`node:test`) sehingga dapat diuji secara terisolasi di dalam container Docker sandbox ephemeral tanpa memerlukan akses internet (`--network none`):

```bash
npm test
# atau
node --test test/*.test.js
```
