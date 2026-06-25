"use client";

import { useMemo, useState } from "react";
import {
  RESOURCE_ARTICLES,
  RESOURCE_TEMAS,
  RESOURCE_TIPOS,
  type ResourceTema,
  type ResourceTipo,
} from "../lib/recursos";
import DemoBanner from "./DemoBanner";
import ResourceCard from "./ResourceCard";

// Cambiar a true para volver a mostrar los filtros Tipo/Tema en /recursos.
const SHOW_FILTERS = false;

export default function RecursosFeed() {
  const [tipo, setTipo] = useState<ResourceTipo | "">("");
  const [tema, setTema] = useState<ResourceTema | "">("");

  const filtered = useMemo(() => {
    return RESOURCE_ARTICLES.filter((article) => {
      if (tipo && article.tipo !== tipo) return false;
      if (tema && !article.temas.includes(tema)) return false;
      return true;
    });
  }, [tipo, tema]);

  return (
    <>
      {SHOW_FILTERS && (
        <div className="resource-filters wrap">
          <div className="resource-filter-group">
            <span className="resource-filter-label">Tipo</span>
            <div className="resource-filter-pills">
              <button
                type="button"
                className={tipo === "" ? "active" : ""}
                onClick={() => setTipo("")}
              >
                Todos
              </button>
              {RESOURCE_TIPOS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={tipo === item ? "active" : ""}
                  onClick={() => setTipo(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="resource-filter-group">
            <span className="resource-filter-label">Tema</span>
            <div className="resource-filter-pills">
              <button
                type="button"
                className={tema === "" ? "active" : ""}
                onClick={() => setTema("")}
              >
                Todos
              </button>
              {RESOURCE_TEMAS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={tema === item ? "active" : ""}
                  onClick={() => setTema(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`resource-feed wrap${SHOW_FILTERS ? "" : " resource-feed--after-hero"}`}
      >
        {filtered.length === 0 && (
          <p className="resource-empty">
            No hay entradas con esos filtros.{" "}
            <button
              type="button"
              className="resource-empty-reset"
              onClick={() => {
                setTipo("");
                setTema("");
              }}
            >
              Ver todas
            </button>
          </p>
        )}

        {filtered.length > 0 && (
          <div className="resource-list">
            {filtered.map((article) => (
              <ResourceCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>

      <div className="wrap resource-demo">
        <DemoBanner />
      </div>
    </>
  );
}
