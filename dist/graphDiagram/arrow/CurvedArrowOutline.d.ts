export default class CurvedArrowOutline {
    startAttach: any;
    endAttach: any;
    offsetAngle: number;
    startRadius: number;
    endRadius: number;
    endCentre: number;
    minOffset: number;
    arrowWidth: number;
    headWidth: number;
    headLength: number;
    radiusRatio: number;
    homotheticCenter: number;
    shaftRadius: number;
    headRadius: number;
    g1: number;
    c1: number;
    g2: number;
    c2: number;
    cx: number;
    cy: number;
    arcRadius: number;
    outline: any;
    apex: any;
    constructor(startRadius: number, endRadius: number, endCentre: number, minOffset: number, arrowWidth: number, headWidth: number, headLength: number);
    square(l: number): number;
    intersectWithOtherCircle(fixedPoint: any, radius: number, xCenter: number, polarity: number): any;
    startTangent(dr: number): string;
    endTangent(dr: number): string;
    endNormal(dc: number): string;
}
