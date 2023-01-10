import { Base } from "./base";
import { QueueHandler } from "./queueHandler";
import { applyMixins } from "./utils";

class QueueManager extends Base {}

interface QueueManager extends QueueHandler {}

applyMixins(QueueManager, [QueueHandler]);

export default QueueManager;
