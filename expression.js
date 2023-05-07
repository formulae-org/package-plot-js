'use strict';

export class Plot extends Formulae.Package {}

Plot.setExpressions = function(module, ) {
	// plots
	[
		"2DFunctionCurvePlot", "2DParametricCurvePlot", "2DPolarCurvePlot",      "SurfaceMapPlot",
		"SurfaceContourPlot",  "3DFunctionSurfacePlot",	"3DParametricCurvePlot", "3DParametricSurfacePlot"
	].forEach(tag => Formulae.setExpression(module, "Plot." + tag, {
		clazz:        Expression.Function,
		getTag:       () => "Plot." + tag,
		getMnemonic:  () => Plot.messages["mnemonic" + tag],
		getName:      () => Plot.messages["name" + tag],
		getChildName: index => Plot.messages.childrenPlot[index],
		max: 2
	}));
	
	[ "Palette", "Wireframe", "WireframeHidden" ].forEach(tag => Formulae.setExpression(module, "Plot.SurfaceType." + tag, {
		clazz:    Expression.LabelExpression,
		getTag:   () => "Plot.SurfaceType." + tag,
		getLabel: () => Plot.messages["literal" + tag],
		getName:  () => Plot.messages["name" + tag]
	}));
};
