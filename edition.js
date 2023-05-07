'use strict';

export class Plot extends Formulae.Package {}

Plot.setEditions = function() {
	[
		"2DFunctionCurvePlot",   "2DParametricCurvePlot", "2DPolarCurvePlot",
		"3DParametricCurvePlot", "3DFunctionSurfacePlot", "3DParametricSurfacePlot",
		"SurfaceMapPlot",        "SurfaceContourPlot"
	].forEach(
		tag => Formulae.addEdition(
			Plot.messages.pathPlot,
			null,
			Plot.messages["leaf" + tag],
			() => Expression.wrapperEdition("Plot." + tag)
		)
	);
	
	[ "Palette", "Wireframe", "WireframeHidden" ].forEach(
		tag => Formulae.addEdition(
			Plot.messages.pathSurfaceType,
			null,
			Plot.messages["leaf" + tag],
			() => Expression.replacingEdition("Plot.SurfaceType." + tag)
		)
	);
};
