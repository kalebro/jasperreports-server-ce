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
package com.jaspersoft.jasperserver.war.cascade.handlers.converters;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParseException;

/**
 * @author Yaroslav.Kovalchyk
 * @version $Id$
 */
@Service
public class NumberDataConverter implements DataConverter<Number> {

    public String valueToString(Number value) {
        if (value == null) return "";
        DecimalFormat df = (DecimalFormat) NumberFormat.getNumberInstance(LocaleContextHolder.getLocale());
        df.setGroupingUsed(false);
        df.setMaximumFractionDigits(Integer.MAX_VALUE);
        return df.format(value);
    }

    @Override
    public Number stringToValue(String rawData) throws ParseException{
        return rawData != null && !"".equals(rawData) ? (new BigDecimal(rawData.replace(",", "."))).stripTrailingZeros() : null;
    }
}
