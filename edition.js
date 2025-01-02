/*
Fōrmulæ plot package. Module for edition.
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
