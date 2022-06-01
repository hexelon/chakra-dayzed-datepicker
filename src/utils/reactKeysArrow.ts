import { KeyboardEvent} from 'react'

export interface ArrowKeysReactConfig {
    left?: () => void,
    right?: () => void,
    up?: () => void,
    down?: () => void,
}


export class ArrowKeysReact {
    config: ArrowKeysReactConfig

    constructor(config: ArrowKeysReactConfig) {
        this.config = config
    }

    getEvents() {
        return {
            onKeyDown: (e: KeyboardEvent) => {
                if (e.keyCode === 37){
                    this.config.left && this.config.left()
                } else if (e.keyCode === 39) {
                    this.config.right && this.config.right()
                } else if (e.keyCode === 38) {
                    this.config.up && this.config.up()
                } else if (e.keyCode === 40) {
                    this.config.down && this.config.down()
                }
            }
        }
    }
}
