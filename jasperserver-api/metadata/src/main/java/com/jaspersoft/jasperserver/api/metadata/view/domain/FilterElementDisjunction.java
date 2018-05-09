/*
 * Copyright © 2005 - 2018 TIBCO Software Inc.
 * http://www.jaspersoft.com.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
package com.jaspersoft.jasperserver.api.metadata.view.domain;

import com.jaspersoft.jasperserver.api.JasperServerAPI;


/**
 * A disjunction of two or more filter elements.
 * 
 * <p>
 * The composing filter elements will be applied using OR as logical operation.
 * </p>
 * 
 * @author Lucian Chirita (lucianc@users.sourceforge.net)
 * @version $Id$
 * @since 1.0
 */
@JasperServerAPI
public class FilterElementDisjunction extends FilterElementCollection implements
		FilterElement {

	/**
	 * Creates an empty element disjunction.
	 * 
	 * @see FilterElementCollection#addFilterElement(FilterElement)
	 */
	public FilterElementDisjunction() {
		super();
	}

	/**
	 * @see Filter#applyDisjunction(java.util.List)
	 */
	public void apply(Filter filter) {
		filter.applyDisjunction(getFilterElements());
	}

	/**
	 * Performs a deep clone of the filter elements that compose this 
	 * disjunction.
	 * 
	 * @since 3.5.0
	 */
	public FilterElement cloneFilterElement() {
		FilterElementDisjunction clone = new FilterElementDisjunction();
		clone.addClonedElements(getFilterElements());
		return clone;
	}
}
