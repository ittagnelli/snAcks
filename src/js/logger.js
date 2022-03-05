const DEBUG = true;

const level2color = {
    "DEBUG": "blue",
    "INFO": "green",
    "WARNING": "orange",
    "ERROR": "red",
}

export function create_logger(namespace) {
    function _log(level, mex) {
        if (DEBUG) {
            const timestamp = new Date().toISOString();
            console.log(`%c ${timestamp}-[${namespace}]-${level}:::${mex}`, `color: ${level2color[level]}; font-weight: bold;`);
        }
    }

	return {
		debug: function(mex) { _log("DEBUG", mex); },
        info: function(mex) { _log("INFO", mex); },
        warning: function(mex) { _log("WARNING", mex); },
        error: function(mex) { _log("ERROR", mex); },
	};
}
