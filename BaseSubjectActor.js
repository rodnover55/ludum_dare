define(
    ['caat'],
    function(CAAT) {
        CAAT.BaseSubjectActor = function(subject) {
            CAAT.BaseSubjectActor.superclass.constructor.call(this);
            this.subject = subject;
            this.setFrameTime(0, Number.MAX_VALUE);
            return this;
        }
        CAAT.BaseSubjectActor.prototype = {
            register: function(container) {
                var self = this;
                self.setLocation(self.subject.respawn[0], self.subject.respawn[1]);
                self.setBackgroundImage(this.subject.icon, true);
                container.addChild(self);
            },
            mouseClick: function(mouseEvent) {
                // TODO: Если не в точке - прийти в неё
                if (!this.subject.isManCanUse()) {
                    return
                }
                if (!this.subject.game.currentCharacter.isLocated(this.subject.point[0], this.subject.point[1])) {
                    this.subject.game.currentCharacter.move(this.subject.point[0], this.subject.point[1]);
                } else {
                    this.subject.doIt();
                }
            },
            mouseEnter: function(mouseEvent) {
                if (this.subject.isManCanUse()) {
                    document.body.style.cursor = 'pointer';
                }
            },
            mouseExit: function(mouseEvent) {
                document.body.style.cursor = 'default';
            }
        }

        extend(CAAT.BaseSubjectActor, CAAT.Actor);
        return CAAT.BaseSubjectActor;
    });