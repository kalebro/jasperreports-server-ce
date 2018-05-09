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
package com.jaspersoft.jasperserver.api.engine.scheduling.domain.jaxb;

import javax.xml.bind.annotation.adapters.XmlAdapter;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 *
 * @author Yaroslav.Kovalchyk
 * @version $Id$
 */
public class WeekDaysByteXmlAdapter extends XmlAdapter<WeekDaysSortedSetWrapper, SortedSet<Byte>>{
    @Override
    public SortedSet<Byte> unmarshal(WeekDaysSortedSetWrapper v) throws Exception {
        SortedSet<Byte> result = null;
        if(v != null && v.getDays() != null && !v.getDays().isEmpty()){
            result = new TreeSet<Byte>();
            for(String value : v.getDays())
                result.add(Byte.valueOf(value));
        }
        return result;
    }

    @Override
    public WeekDaysSortedSetWrapper marshal(SortedSet<Byte> v) throws Exception {
        WeekDaysSortedSetWrapper result = null;
        if(v != null && !v.isEmpty()){
            SortedSet<String> strings = new TreeSet<String>();
            for(Byte value : v)
                strings.add(value.toString());
            result = new WeekDaysSortedSetWrapper(strings);
        }
        return result;
    }
}
