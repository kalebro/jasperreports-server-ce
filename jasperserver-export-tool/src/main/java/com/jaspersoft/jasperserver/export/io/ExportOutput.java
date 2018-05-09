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

package com.jaspersoft.jasperserver.export.io;

import java.io.IOException;
import java.io.OutputStream;
import java.util.Properties;


/**
 * @author Lucian Chirita (lucianc@users.sourceforge.net)
 * @version $Id$
 */

public interface ExportOutput {

	void open() throws IOException;

	void close() throws IOException;
	
	void mkdir(String path) throws IOException;
	
	String mkdir(String parentPath, String path) throws IOException;
	
	OutputStream getFileOutputStream(String path) throws IOException;
	
	OutputStream getFileOutputStream(String parentPath, String path) throws IOException;
	
	Properties getOutputProperties();

}
