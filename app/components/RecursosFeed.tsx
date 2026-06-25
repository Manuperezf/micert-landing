"use client";

import { useMemo, useState } from "react";
import {
  RESOURCE_ARTICLES,
  RESOURCE_TEMAS,
  RESOURCE_TIPOS,
  getFeaturedArticle,
  type ResourceTema,
  type ResourceTipo,
} from "../lib/recursos";
import DemoBanner from "./DemoBanner";
import ResourceCard from "./ResourceCard";

export default function RecursosFeed() {
  const [tipo, setTipo] = useState<ResourceTipo | "">("");
  const [tema, setTema] = useState<ResourceTema | "">("");

  const featured = getFeaturedArticle();

  const filtered = useMemo(() => {
    return RESOURCE_ARTICLES.filter((article) => {
      if (tipo && article.tipo !== tipo) return false;
      if (tema && !article.temas.includes(tema)) return false;
      return true;
    });
  }, [tipo, tema]);

  const showFeatured =
    featured &&
    filtered.some((a) => a.slug === featured.slug) &&
    !tipo &&
    !tema;

  const list = showFeatured
    ? filtered.filter((a) => a.slug !== featured.slug)
    : filtered;

  return (
    <>
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

      <div className="resource-feed wrap">
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

        {showFeatured && featured && (
          <ResourceCard article={featured} featured />
        )}

        {list.length > 0 && (
          <div className="resource-grid">
            {list.map((article) => (
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
