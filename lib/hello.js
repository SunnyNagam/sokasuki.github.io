/* start module: hello */
$pyjs['loaded_modules']['hello'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['hello']['__was_initialized__']) return $pyjs['loaded_modules']['hello'];
	var $m = $pyjs['loaded_modules']['hello'];
	$m['__repr__'] = function() { return '<module: hello>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'hello';
	$m['__name__'] = __mod_name__;


	$m['pyjs'] = $p['___import___']('pyjs', null);
	$p['printFunc'](['Hello World'], 1);
	return this;
}; /* end hello */


/* end module: hello */


/*
PYJS_DEPS: ['pyjs']
*/
