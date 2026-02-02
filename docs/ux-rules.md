# Easy Click — UX Rules
**From principles to execution**

Este documento traduce el UX Manifesto de Easy Click en reglas claras y accionables
para diseño, desarrollo y revisión de producto.

---

## 1. Estructura base de pantalla

Toda pantalla Easy Click debe seguir esta jerarquía:

1. **Header**
   - Contexto claro del módulo
   - Acciones globales mínimas (tema, usuario)

2. **Título de pantalla**
   - Qué es esta vista
   - Texto claro y directo

3. **Área de acción primaria**
   - CTA principal visible sin scroll
   - Inputs o controles directamente relacionados

4. **Contenido secundario**
   - Listas
   - Historial
   - Detalles adicionales

> Si una pantalla no tiene una acción principal clara, está mal definida.

---

## 2. Reglas de CTAs

- Solo **1 CTA primario por vista**
- El CTA primario:
  - Color: Easy Click Orange
  - Verbo claro: *Crear, Guardar, Cobrar, Continuar*
  - Tamaño dominante

- CTAs secundarios:
  - Estilo ghost u outline
  - Menor peso visual
  - Nunca competir con el primario

---

## 3. Navegación

### 3.1 Sidebar
- Estructura estable
- Categorías claras
- Estados activos visibles
- Persistencia entre páginas

### 3.2 Header
- No sobrecargar
- Acciones globales únicamente
- Nunca acciones de flujo

---

## 4. Modals vs Pages

### Usar **Modal** cuando:
- Acción rápida
- Contexto claro
- No requiere scroll
- Se puede cancelar sin riesgo

### Usar **Page** cuando:
- Flujo de varios pasos
- Alta concentración
- Información extensa

**Regla dura:**
> Si necesita scroll, no es modal.

---

## 5. Estados de sistema

Toda interacción debe tener:

- **Idle**
- **Loading**
- **Success**
- **Error**
- **Empty**

Nunca permitir:
- Pantallas en blanco
- Spinners infinitos
- Acciones sin feedback

---

## 6. Loading states

- Skeletons > spinners
- Mantener layout estable
- Mostrar progreso si tarda más de 500ms

---

## 7. Empty states

Todo empty state debe responder:

1. Qué es esta sección
2. Por qué está vacía
3. Qué hacer ahora

Ejemplo:
> “Aún no hay órdenes. Crea una nueva para comenzar.”

---

## 8. Formularios

### 8.1 Inputs
- Menos campos = mejor UX
- Defaults inteligentes
- Autocompletar siempre que sea posible

### 8.2 Validación
- Mensajes claros
- Lenguaje humano
- Indicar cómo corregir

Nunca:
- Errores técnicos
- Mensajes genéricos

---

## 9. Errores

Un error debe comunicar:

1. Qué pasó
2. Qué pudo causar el error
3. Qué puede hacer el usuario

Nunca culpar al usuario.

---

## 10. Tablas

- Headers claros
- Alineación consistente
- Totales alineados a la derecha
- Acciones siempre al final

---

## 11. Uso del color

- Naranja → acción primaria
- Verde → éxito
- Rojo → error / riesgo
- Neutrales → estructura

Nunca usar color solo por estética.

---

## 12. Accesibilidad

- Focus visible
- Targets grandes
- Navegación por teclado
- Contraste suficiente

No es opcional.

---

## 13. Animaciones

- Duración: 150–250ms
- Solo para feedback y transición
- Nunca decorativas

---

## 14. Checklist antes de merge

- ¿La acción principal es obvia?
- ¿Hay feedback inmediato?
- ¿Existen estados empty/loading/error?
- ¿Se puede usar con teclado?
- ¿Reduce fricción real?

Si alguna respuesta es “no”, no se mergea.
