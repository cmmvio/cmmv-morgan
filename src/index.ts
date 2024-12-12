import _ from "@cmmv/middleware";
import * as morgan from "morgan";

export default (opts?) => { return _(morgan(opts)) };