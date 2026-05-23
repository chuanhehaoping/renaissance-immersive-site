"use client";

import {
  EffectComposer,
  Bloom,
  Vignette,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Postprocessing() {
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <Bloom
        intensity={0.55}
        luminanceThreshold={0.78}
        luminanceSmoothing={0.18}
        mipmapBlur
        radius={0.7}
      />
      <BrightnessContrast brightness={0.02} contrast={0.04} />
      <Vignette
        offset={0.32}
        darkness={0.42}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
      <SMAA />
    </EffectComposer>
  );
}
