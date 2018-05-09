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
package com.jaspersoft.jasperserver.jaxrs.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jaspersoft.jasperserver.remote.helpers.JacksonMapperProvider;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

/**
 * <p></p>
 *
 * @author yaroslav.kovalchyk
 * @version $Id$
 */
@Provider
@Component
public class JacksonMapperContextResolver implements ContextResolver<ObjectMapper> {
    @Resource
    private JacksonMapperProvider provider;
    @Override
    public ObjectMapper getContext(Class<?> aClass) {
        return provider.getObjectMapper();
    }
}
