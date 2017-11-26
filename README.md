## Modules

<dl>
<dt><a href="#module_envsubstr">envsubstr</a></dt>
<dd><p>Small purposeful global npm module without dependencies.</p>
<h2 id="production">Production</h2>
<p>Use in production at your own risk.</p>
<h2 id="install">Install</h2>
<pre><code class="lang-cli">$ npm install -g envsubstr
</code></pre>
</dd>
<dt><a href="#module_envsubstr">envsubstr</a> ⇒ <code>String</code></dt>
<dd><p>Replace matched value and return string.</p>
</dd>
</dl>

<a name="module_envsubstr"></a>

## envsubstr
Small purposeful global npm module without dependencies.

## Production

Use in production at your own risk.

## Install

```cli
$ npm install -g envsubstr
```

**License**: MIT  
**Example**  
```js
$ echo "${USER}" | envsubstr
```
<a name="module_envsubstr"></a>

## envsubstr ⇒ <code>String</code>
Replace matched value and return string.

**Throws**:

- <code>Error</code> Environment variable not found.


| Param | Type |
| --- | --- |
| data | <code>String</code> | 

**Example**  
```js
import parser from 'envsubstr';
parser('${USER}');
```
