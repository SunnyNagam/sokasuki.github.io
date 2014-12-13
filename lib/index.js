/* start module: index */
$pyjs['loaded_modules']['index'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['index']['__was_initialized__']) return $pyjs['loaded_modules']['index'];
	var $m = $pyjs['loaded_modules']['index'];
	$m['__repr__'] = function() { return '<module: index>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'index';
	$m['__name__'] = __mod_name__;


	$m['pyjs'] = $p['___import___']('pyjs', null);
	$p['printFunc'](['index World'], 1);
	return this;
}; /* end index */


/* end module: index */


/*
PYJS_DEPS: ['pyjs']
*/
