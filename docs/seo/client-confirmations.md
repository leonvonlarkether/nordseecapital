# Confirmaciones Pendientes del Cliente — Asuntos Regulatorios y Corporativos

Este documento registra de forma explícita y transparente aquellos puntos que requieren validación, credenciales o confirmación documental por parte de los socios directores de Nordsee Capital. Para proteger la integridad legal y evitar afirmaciones engañosas en buscadores y motores de respuesta, estos elementos se mantienen aislados en el código y en el contenido público.

---

## 1. Transición de la Figura Administradora (Restricción Regulatoria Crítica)

* **Situación Comunicada**: El cliente informó que no renovó su administradora anterior y se encuentra migrando hacia una nueva figura operativa.
* **Impacto en el Sitio Web**: 
  * En cumplimiento con las directrices de la CMF (Chile) y los estándares de veracidad de Google (E-E-A-T), **no se publican afirmaciones que sugieran que Nordsee Capital es actualmente una Administradora General de Fondos (AGF) autorizada**, ni se mencionan registros regulatorios en trámite como si estuvieran formalmente otorgados.
  * Los servicios se definen con precisión técnica como **asesoría estratégica, consultoría fiduciaria, originación de activos y estructuración societaria**.
* **Dato Exacto Requerido del Cliente**:
  1. Denominación social exacta de la nueva entidad jurídica constituida.
  2. Alcance regulatorio formal de la nueva figura (e.g. Asesor de Inversiones registrado bajo Ley Fintech N° 21.521, Administradora Privada o sociedad de consultoría).
  3. Si corresponde publicar números de registro oficial una vez completado el trámite ante la CMF o la autoridad respectiva.

---

## 2. Validación de la Sede Corporativa en Santiago

* **Situación Actual**: En [src/content/site.ts](file:///home/leon/dev/nordseecapital/src/content/site.ts), la oficina de Concepción figura con `status: "verified"` (`Bernardo O'Higgins 241, Piso 9, Oficina 903`), mientras que la sede de Santiago figura con `status: "pending_confirmation"` (`Los Militares, Las Condes, Santiago (Piso 21, Oficina 2101)`).
* **Impacto en el Sitio Web**: En los esquemas de Schema.org y páginas de contacto se muestran ambas sedes con la advertencia correspondiente de confirmación fiduciaria.
* **Dato Requerido**:
  * Confirmación de entrega/operatividad definitiva de la oficina de Las Condes para actualizar su estatus a `"verified"` y proceder con el alta verificada en Google Business Profile.

---

## 3. Identidad del Partner Local en Lisboa para Golden Visa

* **Situación Actual**: La página de Golden Visa Portugal destaca el trabajo en terreno con una firma legal y gestora asociada en Lisboa, sin revelar nombres de terceros no formalizados en el código.
* **Dato Requerido**:
  * Confirmación de si se desea publicar formalmente la denominación del despacho de abogados o sociedad gestora en Lisboa (Portugal), o mantener la formulación general fiduciaria de "partner local regulado".

---

## 4. Credenciales de Herramientas de Medición (Google Search Console & GA4)

* **Situación Actual**: El proyecto tiene configurado `@vercel/analytics`, pero carece de ID de medición de Google Analytics 4 (`G-XXXXXXXXXX`) y archivo o registro DNS de verificación en Google Search Console.
* **Dato Requerido**:
  * ID de medición de GA4 o acceso a Google Search Console para vincular el sitemap [https://nordseecapital.com/sitemap.xml](https://nordseecapital.com/sitemap.xml).
