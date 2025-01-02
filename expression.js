/*
Fōrmulæ plot package. Module for expressions.
Copyright (C) 2015-2025 Laurence R. Ugalde

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
