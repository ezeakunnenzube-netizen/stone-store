"use client";

import { useLayoutEffect, useState, useEffect } from "react";
import Link from "next/link";
import { Calculator, Droplets, LayoutGrid, Ruler, Square } from "lucide-react";
import "./TileCalculator.css";

export default function TileCalculatorPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---------------------------------------------------------------------------
  // 1. INPUT STATE (useState)
  // ---------------------------------------------------------------------------
  // Room dimensions in meters
  const [lengthM, setLengthM] = useState<string>("");
  const [widthM, setWidthM] = useState<string>("");

  // Per-tile dimensions in centimeters
  const [tileLengthCm, setTileLengthCm] = useState<string>("");
  const [tileWidthCm, setTileWidthCm] = useState<string>("");

  // Wastage / buffer percentage (defaults to standard 10%)
  const [wastagePct, setWastagePct] = useState<string>("10");

  // ---------------------------------------------------------------------------
  // 2. OUTPUT ESTIMATES STATE (useState)
  // Changes according to room dimensions and tile dimensions inputted
  // ---------------------------------------------------------------------------
  const [tilesEstimated, setTilesEstimated] = useState<number>(0);
  const [roomArea, setRoomArea] = useState<number>(0);
  const [tileArea, setTileArea] = useState<number>(0);
  const [effectiveArea, setEffectiveArea] = useState<number>(0);

  // Copy feedback state
  const [copied, setCopied] = useState<boolean>(false);

  // ---------------------------------------------------------------------------
  // 3. REACTIVE ESTIMATE UPDATE (useEffect)
  // Dynamically recomputes whenever room dimensions or tile dimensions are entered/changed
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const parseVal = (val: string): number => {
      if (!val) return 0;
      const num = parseFloat(val.toString().trim().replace(",", "."));
      return isNaN(num) || num < 0 ? 0 : num;
    };

    // 1. Room dimensions
    const length = parseVal(lengthM);
    const width = parseVal(widthM);
    const calculatedRoomArea = length * width; // m²
    setRoomArea(calculatedRoomArea);

    // 2. Tile dimensions (cm to m)
    const tileL = parseVal(tileLengthCm);
    const tileW = parseVal(tileWidthCm);
    const calculatedTileArea =
      tileL > 0 && tileW > 0 ? (tileL / 100) * (tileW / 100) : 0; // m²
    setTileArea(calculatedTileArea);

    // 3. Wastage buffer
    const wastage = parseVal(wastagePct) / 100;
    const calculatedEffectiveArea = calculatedRoomArea * (1 + wastage); // m²
    setEffectiveArea(calculatedEffectiveArea);

    // 4. Tiles estimated: updates according to room dimensions & tile dimensions inputted
    if (calculatedRoomArea > 0 && calculatedTileArea > 0) {
      const needed = Math.ceil(calculatedEffectiveArea / calculatedTileArea);
      setTilesEstimated(needed);
    } else {
      setTilesEstimated(0);
    }
  }, [lengthM, widthM, tileLengthCm, tileWidthCm, wastagePct]);

  // Copy estimate to clipboard handler
  const handleCopy = () => {
    const tileL = parseFloat(tileLengthCm) || 0;
    const tileW = parseFloat(tileWidthCm) || 0;
    const text = `Tiles needed: ${tilesEstimated} (room ${roomArea.toFixed(
      2
    )}m², tile ${tileL}x${tileW}cm, wastage ${wastagePct}%)`;

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tilecalc-page">
      {/* =======================================================================
          HERO BANNER
          ======================================================================= */}
      <div className="tilecalc-hero">
        <div className="tilecalc-hero-inner">
          <div className="tilecalc-badge">
            <Calculator size={14} />
            <span>Tile Calculator</span>
          </div>
          <h1 className="tilecalc-title">Premium Tile Coverage Estimator</h1>
          <p className="tilecalc-subtitle">
            Enter your room dimensions and tile size to estimate the number of
            tiles required—includes your chosen wastage.
          </p>
          <Link href="/products" className="tilecalc-ghost-cta">
            Browse Tiles
          </Link>
        </div>
      </div>

      {/* =======================================================================
          CALCULATOR CONTENT GRID (DARK THEME)
          ======================================================================= */}
      <div className="tilecalc-content">
        <div className="tilecalc-grid">
          {/* -------------------------------------------------------------------
              CARD 1: PROJECT INPUTS
              ------------------------------------------------------------------- */}
          <div className="tilecalc-card">
            <div className="tilecalc-card-title">Project Inputs</div>

            <div className="tilecalc-form">
              {/* Length (m) */}
              <div className="tilecalc-row">
                <label className="tilecalc-label">
                  <Ruler size={14} /> Length (m)
                </label>
                <input
                  className="tilecalc-input"
                  type="text"
                  inputMode="decimal"
                  value={lengthM}
                  onChange={(e) => setLengthM(e.target.value)}
                  placeholder="e.g. 8"
                />
              </div>

              {/* Width (m) */}
              <div className="tilecalc-row">
                <label className="tilecalc-label">
                  <Ruler size={14} /> Width (m)
                </label>
                <input
                  className="tilecalc-input"
                  type="text"
                  inputMode="decimal"
                  value={widthM}
                  onChange={(e) => setWidthM(e.target.value)}
                  placeholder="e.g. 5"
                />
              </div>

              <div className="tilecalc-divider" />

              {/* Tile Length (cm) */}
              <div className="tilecalc-row">
                <label className="tilecalc-label">
                  <LayoutGrid size={14} /> Tile Length (cm)
                </label>
                <input
                  className="tilecalc-input"
                  type="text"
                  inputMode="decimal"
                  value={tileLengthCm}
                  onChange={(e) => setTileLengthCm(e.target.value)}
                  placeholder="e.g. 60"
                />
              </div>

              {/* Tile Width (cm) */}
              <div className="tilecalc-row">
                <label className="tilecalc-label">
                  <LayoutGrid size={14} /> Tile Width (cm)
                </label>
                <input
                  className="tilecalc-input"
                  type="text"
                  inputMode="decimal"
                  value={tileWidthCm}
                  onChange={(e) => setTileWidthCm(e.target.value)}
                  placeholder="e.g. 60"
                />
              </div>

              <div className="tilecalc-divider" />

              {/* Wastage / Buffer (%) */}
              <div className="tilecalc-row">
                <label className="tilecalc-label">
                  <Droplets size={14} /> Wastage / buffer (%){" "}
                  <span className="tilecalc-hint">(cuts, fitting, pattern)</span>
                </label>
                <input
                  className="tilecalc-input"
                  type="text"
                  inputMode="decimal"
                  value={wastagePct}
                  onChange={(e) => setWastagePct(e.target.value)}
                  placeholder="e.g. 10"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              CARD 2: ESTIMATED RESULTS (REACTIVE VIA useState)
              ------------------------------------------------------------------- */}
          <div className="tilecalc-card tilecalc-results">
            <div className="tilecalc-card-title">Estimated Results</div>

            {/* Room Area */}
            <div className="tilecalc-metric">
              <div className="tilecalc-metric-top">
                <Square size={16} />
                <div className="tilecalc-metric-label">Room Area</div>
              </div>
              <div className="tilecalc-metric-value">
                {roomArea > 0 ? roomArea.toFixed(2) : "0.00"} <span>m²</span>
              </div>
            </div>

            {/* Tile Area */}
            <div className="tilecalc-metric">
              <div className="tilecalc-metric-top">
                <LayoutGrid size={16} />
                <div className="tilecalc-metric-label">Tile Area</div>
              </div>
              <div className="tilecalc-metric-value">
                {tileArea > 0 ? tileArea.toFixed(4) : "0.0000"} <span>m²</span>
              </div>
            </div>

            {/* Effective Area (with wastage) */}
            <div className="tilecalc-metric">
              <div className="tilecalc-metric-top">
                <Droplets size={16} />
                <div className="tilecalc-metric-label">Effective Area (with wastage)</div>
              </div>
              <div className="tilecalc-metric-value">
                {effectiveArea > 0 ? effectiveArea.toFixed(2) : "0.00"} <span>m²</span>
              </div>
            </div>

            {/* Big Hero: Tiles Needed */}
            <div className="tilecalc-big">
              <div className="tilecalc-big-top">
                <span className="tilecalc-big-icon">
                  <LayoutGrid size={18} />
                </span>
                <div className="tilecalc-big-label">Tiles Needed</div>
              </div>
              <div className="tilecalc-big-value">
                {tilesEstimated.toLocaleString()}{" "}
                <span className="tilecalc-big-unit">tiles</span>
              </div>
              <div className="tilecalc-big-sub">
                Based on your inputs and {wastagePct || "0"}% buffer.
              </div>
            </div>

            {/* Action: Copy Estimate */}
            <div className="tilecalc-cta-row">
              <button
                className="tilecalc-copy-btn"
                onClick={handleCopy}
                type="button"
              >
                {copied ? "Estimate Copied!" : "Copy Estimate"}
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------
            FOOTNOTE & CONSULTATION
            ------------------------------------------------------------------- */}
        <div className="tilecalc-footnote">
          <p>
            Tip: if your project includes openings (niche, window, hearth), reduce
            the room area accordingly for higher accuracy.
          </p>
          <div className="tilecalc-powered">
            <span>Need a quote? Contact us for a detailed estimate.</span>
            <a
              href="https://wa.me/2348067110134"
              target="_blank"
              rel="noopener noreferrer"
              className="tilecalc-powered-link"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
