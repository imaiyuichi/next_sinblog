import { gsap } from 'gsap';
import { CustomEase } from './vendor/CustomEase';
gsap.registerPlugin(CustomEase);
gsap.ticker.fps(60);

// ブレイクポイント
export const BREAKPOINT = 768;

// ベストビュー
export const BESTVIEW = {
  PC: {
    WIDTH: 1440,
    HEIGHT: 810,
  },
  SP: {
    WIDTH: 360,
    HEIGHT: 639,
  },
};

// アニメーション時間
export const DURASION = {
  SHORT: 0.3,
  BASE: 0.4,
  FULL: 0.6,
  SCROLL: 0.8,
};

// イージング
export const EASING = {
  TRANSFORM: CustomEase.create('transform', 'M0,0 C0.44,0.05 0.17,1 1,1'),
  MATERIAL: CustomEase.create('material', 'M0,0 C0.26,0.16 0.1,1 1,1'),
};
