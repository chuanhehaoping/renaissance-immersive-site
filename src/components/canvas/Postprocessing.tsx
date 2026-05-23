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
        intensity={0.32}
        luminanceThreshold={0.86}
        luminanceSmoothing={0.2}
        mipmapBlur
        radius={0.55}
      />
      <BrightnessContrast brightness={-0.01} contrast={0.03} />
      <Vignette
        offset={0.32}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
      <SMAA />
    </EffectComposer>
  );
}
