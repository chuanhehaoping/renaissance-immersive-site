"use client";

import { EffectComposer, Vignette, SMAA } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Postprocessing() {
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <Vignette
        offset={0.3}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
      <SMAA />
    </EffectComposer>
  );
}
