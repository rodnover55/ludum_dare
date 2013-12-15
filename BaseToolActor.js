define(
    ['caat'],
    function(CAAT) {
        CAAT.BaseToolActor = function(tool) {
            CAAT.BaseToolActor.superclass.constructor.call(this);
            this.tool = tool;
            this.setFrameTime(0, Number.MAX_VALUE);
            return this;

        }

        CAAT.BaseToolActor.prototype = {
            register: function(container) {
                var self = this;
                self.setLocation(self.tool.respawn[0], self.tool.respawn[1]);
                self.setBackgroundImage(this.tool.icon, true);
                container.addChild(self);
            },
            mouseClick: function(mouseEvent) {
                // TODO: Если не в точке - прийти в неё

                if (!this.tool.isManCanUseAbility()) {
                    return
                }
                if (!this.tool.game.currentCharacter.isLocated(this.tool.point[0], this.tool.point[1])) {
                    this.tool.game.currentCharacter.move(this.tool.point[0], this.tool.point[1]);
                } else {
                    this.tool.game.currentCharacter.addTool(this.tool);
                    this.parent.removeChild(this);
                }
            },
            mouseEnter: function(mouseEvent) {
                if (this.tool.isManCanUseAbility()) {
                    document.body.style.cursor = 'pointer';
                }
            },
            mouseExit: function(mouseEvent) {
                document.body.style.cursor = 'default';
            }
        }
        extend(CAAT.BaseToolActor, CAAT.Actor);
        return CAAT.BaseToolActor;
    });