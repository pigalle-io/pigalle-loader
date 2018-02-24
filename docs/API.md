# API reference of :

Mechanisms to dynamically import plugins into the Pigalle framework. 

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

### Modules

<dl>
<dt><a href="#module_import-error">import-error</a></dt>
<dd><p>Errors raised if the {Importer} is unable to import the requested plugin.</p>
</dd>
<dt><a href="#module_importer">importer</a></dt>
<dd><p>Mechanisms to facilitate the import of dependencies and plugins when using the Pigalle framework.</p>
</dd>
</dl>

<a name="module_import-error"></a>

### import-error
Errors raised if the {Importer} is unable to import the requested plugin.

**Example**  
```js
throw new ImportError() // ... throw an {ImportError}

throw ImportError.factory() // ... another way to throw an {ImportError}
```

* [import-error](#module_import-error)
    * [~ImportError](#module_import-error..ImportError)
    * [~PluginNotFoundError](#module_import-error..PluginNotFoundError)
    * [~NotValidPluginError](#module_import-error..NotValidPluginError)

<a name="module_import-error..ImportError"></a>

#### import-error~ImportError
Exception to throw when an error occurs during plugin import.

**Kind**: inner class of [<code>import-error</code>](#module_import-error)  
**Access**: public  
<a name="module_import-error..PluginNotFoundError"></a>

#### import-error~PluginNotFoundError
The plugin directory cannot be founded.

**Kind**: inner class of [<code>import-error</code>](#module_import-error)  
**Access**: public  
<a name="module_import-error..NotValidPluginError"></a>

#### import-error~NotValidPluginError
The requested module is not a valid Pigalle plugin.

**Kind**: inner class of [<code>import-error</code>](#module_import-error)  
**Access**: public  
<a name="module_importer"></a>

### importer
Mechanisms to facilitate the import of dependencies and plugins when using the Pigalle framework.

**Example**  
```js
const {importer} = require('@pigalle/core.importer')

// Load an existing Pigalle plugin
const tcpTransporter = importer('@pigalle/transporter.tcp')

// Load an non-existent plugin
const nonExistentPlugin = importer('heurk') // ... throw a {PluginNotFoundError} exception.

// Load an existent module, but not a valid Pigalle plugin
const notValidPlugin = importer('uuid') // ... throw a {NotValidPluginError} exception.
```

* [importer](#module_importer)
    * [~Importer](#module_importer..Importer)
        * [new Importer(args)](#new_module_importer..Importer_new)
        * _instance_
            * [.import()](#module_importer..Importer+import) ⇒ <code>object</code>
            * [.require(name)](#module_importer..Importer+require) ⇒ <code>object</code>
            * [.getPluginPathFromLocal()](#module_importer..Importer+getPluginPathFromLocal) ⇒ <code>string</code>
            * [.getPluginPathFromLocalJavascriptFile()](#module_importer..Importer+getPluginPathFromLocalJavascriptFile) ⇒ <code>string</code>
            * [.getPluginPathFromLocalDirectoryIndex()](#module_importer..Importer+getPluginPathFromLocalDirectoryIndex) ⇒ <code>string</code>
            * [.getPluginPathFromNodeModule()](#module_importer..Importer+getPluginPathFromNodeModule) ⇒ <code>string</code>
            * [.getPossiblePluginPaths()](#module_importer..Importer+getPossiblePluginPaths) ⇒ <code>Array.&lt;string&gt;</code>
            * [.doesPluginPathExists()](#module_importer..Importer+doesPluginPathExists) ⇒ <code>string</code>
        * _static_
            * [.getCurrentDirectory()](#module_importer..Importer.getCurrentDirectory) ⇒ <code>string</code>
            * [.getCurrentNodeModulesDirectory()](#module_importer..Importer.getCurrentNodeModulesDirectory) ⇒ <code>string</code>
    * [~PIGALLE_TYPE](#module_importer..PIGALLE_TYPE) : <code>string</code>
    * [~importer(o)](#module_importer..importer) ⇒ <code>PluginEntity</code>

<a name="module_importer..Importer"></a>

#### importer~Importer
An helper to facilitate the import of dependencies and plugins.

**Kind**: inner class of [<code>importer</code>](#module_importer)  
**Access**: public  

* [~Importer](#module_importer..Importer)
    * [new Importer(args)](#new_module_importer..Importer_new)
    * _instance_
        * [.import()](#module_importer..Importer+import) ⇒ <code>object</code>
        * [.require(name)](#module_importer..Importer+require) ⇒ <code>object</code>
        * [.getPluginPathFromLocal()](#module_importer..Importer+getPluginPathFromLocal) ⇒ <code>string</code>
        * [.getPluginPathFromLocalJavascriptFile()](#module_importer..Importer+getPluginPathFromLocalJavascriptFile) ⇒ <code>string</code>
        * [.getPluginPathFromLocalDirectoryIndex()](#module_importer..Importer+getPluginPathFromLocalDirectoryIndex) ⇒ <code>string</code>
        * [.getPluginPathFromNodeModule()](#module_importer..Importer+getPluginPathFromNodeModule) ⇒ <code>string</code>
        * [.getPossiblePluginPaths()](#module_importer..Importer+getPossiblePluginPaths) ⇒ <code>Array.&lt;string&gt;</code>
        * [.doesPluginPathExists()](#module_importer..Importer+doesPluginPathExists) ⇒ <code>string</code>
    * _static_
        * [.getCurrentDirectory()](#module_importer..Importer.getCurrentDirectory) ⇒ <code>string</code>
        * [.getCurrentNodeModulesDirectory()](#module_importer..Importer.getCurrentNodeModulesDirectory) ⇒ <code>string</code>

<a name="new_module_importer..Importer_new"></a>

##### new Importer(args)
Create a new instance of {Importer}.


| Param | Description |
| --- | --- |
| args | The arguments. |

<a name="module_importer..Importer+import"></a>

##### importer.import() ⇒ <code>object</code>
Import the module from name.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>object</code> - The loaded module.  
**Access**: public  
<a name="module_importer..Importer+require"></a>

##### importer.require(name) ⇒ <code>object</code>
Load a module using require()

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>object</code> - - The loaded module.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The module name. |

<a name="module_importer..Importer+getPluginPathFromLocal"></a>

##### importer.getPluginPathFromLocal() ⇒ <code>string</code>
Return the possible path of plugin if is installed into the directory of local application.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - The possible installation path of looked up plugin.  
**Access**: public  
<a name="module_importer..Importer+getPluginPathFromLocalJavascriptFile"></a>

##### importer.getPluginPathFromLocalJavascriptFile() ⇒ <code>string</code>
Return the possible path of plugin if is installed into the directory of local application.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - The possible installation path of looked up plugin.  
**Access**: public  
<a name="module_importer..Importer+getPluginPathFromLocalDirectoryIndex"></a>

##### importer.getPluginPathFromLocalDirectoryIndex() ⇒ <code>string</code>
Return the possible path of plugin if is installed into the directory of local application.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - The possible installation path of looked up plugin.  
**Access**: public  
<a name="module_importer..Importer+getPluginPathFromNodeModule"></a>

##### importer.getPluginPathFromNodeModule() ⇒ <code>string</code>
Return the possible path of plugin if is installed into the `./node_modules` directory.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - The possible installation path of looked up plugin.  
**Access**: public  
<a name="module_importer..Importer+getPossiblePluginPaths"></a>

##### importer.getPossiblePluginPaths() ⇒ <code>Array.&lt;string&gt;</code>
Return the possible installation paths of looked up plugin.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>Array.&lt;string&gt;</code> - Possible installation paths of looked up plugin.  
<a name="module_importer..Importer+doesPluginPathExists"></a>

##### importer.doesPluginPathExists() ⇒ <code>string</code>
Check if the plugin path exists.

**Kind**: instance method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - Path of plugin if founded. Throw an error else.  
**Throws**:

- <code>PluginNotFoundError</code> if plugin cannot be founded.

<a name="module_importer..Importer.getCurrentDirectory"></a>

##### Importer.getCurrentDirectory() ⇒ <code>string</code>
Return the current directory of the current application.

**Kind**: static method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - The current directory of the current application.  
**Access**: public  
<a name="module_importer..Importer.getCurrentNodeModulesDirectory"></a>

##### Importer.getCurrentNodeModulesDirectory() ⇒ <code>string</code>
Return the path of `node_modules/` for the current application.

**Kind**: static method of [<code>Importer</code>](#module_importer..Importer)  
**Returns**: <code>string</code> - The path of `node_modules/` for the current application.  
**Access**: public  
<a name="module_importer..PIGALLE_TYPE"></a>

#### importer~PIGALLE_TYPE : <code>string</code>
The Pigalle type.

**Kind**: inner constant of [<code>importer</code>](#module_importer)  
<a name="module_importer..importer"></a>

#### importer~importer(o) ⇒ <code>PluginEntity</code>
An helper function to import a Pigalle plugin.

**Kind**: inner method of [<code>importer</code>](#module_importer)  
**Returns**: <code>PluginEntity</code> - A derived class of Pigalle {PluginEntity} if the plugin is founded.  
**Throws**:

- <code>PluginNotFoundError</code> if plugin cannot be founded.


| Param | Type | Description |
| --- | --- | --- |
| o | <code>string</code> \| <code>PluginEntity</code> | The name of plugin to import or a derived class of a Pigalle {PluginEntity}. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Sat, 24 Feb 2018 15:57:08 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
