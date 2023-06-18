// taken directly from my other repo :P

Events.on(EventType.ClientLoadEvent, () => {
    
    const oneDialog = new BaseDialog(" ");
    oneDialog.cont.add(" ").row();
    oneDialog.cont.button("OK", () => {
        oneDialog.hide();
      
        const twoDialog = new BaseDialog(" ");
        twoDialog.cont.add(" ").row();
        twoDialog.cont.button("OK", () => {
            twoDialog.hide();
          
            const threeDialog = new BaseDialog(" ");
            threeDialog.cont.add(" ").row();
            threeDialog.cont.button("OK", () => {
                threeDialog.hide();
              
                const fourDialog = new BaseDialog(" ");
                fourDialog.cont.add(" ").row();
                fourDialog.cont.button("OK", () => {
                    fourDialog.hide();
                  
                    const fiveDialog = new BaseDialog(" ");
                    fiveDialog.cont.add(" ").row();
                    fiveDialog.cont.button("OK", () => {
                        fiveDialog.hide();
                      
                        const sixDialog = new BaseDialog(" ");
                        sixDialog.cont.add(" ").row();
                        sixDialog.cont.button("OK", () => {
                            sixDialog.hide();
                          
                            const sevenDialog = new BaseDialog(" ");
                            sevenDialog.cont.add(" ").row();
                            sevenDialog.cont.button("OK", () => {
                                sevenDialog.hide();
                              
                                const eightDialog = new BaseDialog(" ");
                                eightDialog.cont.add(" ").row();
                                eightDialog.cont.button("OK", () => {
                                    eightDialog.hide();
                                  
                                    const nineDialog = new BaseDialog(" ");
                                    nineDialog.cont.add(" ").row();
                                    nineDialog.cont.button("OK", () => {
                                        nineDialog.hide();
                                      
                                        const tenDialog = new BaseDialog(" ");
                                        tenDialog.cont.add(" ").row();
                                        tenDialog.cont.button("OK", () => {
                                            tenDialog.hide();
                                          
                                            const elevenDialog = new BaseDialog(" ");
                                            elevenDialog.cont.add(" ").row();
                                            elevenDialog.cont.button("OK", () => {
                                            elevenDialog.hide();
                                          
                                                const twelveDialog = new BaseDialog(" ");
                                                twelveDialog.cont.add(" ").row();
                                                twelveDialog.cont.button("OK", () => {
                                                twelveDialog.hide();
                                                
                                                    const thirteenDialog = new BaseDialog(" ");
                                                    thirteenDialog.cont.add(" ").row();
                                                    thirteenDialog.cont.button("OK", () => {
                                                    thirteenDialog.hide();
                                                    
                                                        const fourteenDialog = new BaseDialog(" ");
                                                        fourteenDialog.cont.add(" ").row();
                                                        fourteenDialog.cont.button("OK", () => {
                                                        fourteenDialog.hide();
                                                          
                                                            const fifteenDialog = new BaseDialog(" ");
                                                            fifteenDialog.cont.add(" ").row();
                                                            fifteenDialog.cont.button("OK", () => fifteenDialog.hide()).size(100, 50);
                                                            fifteenDialog.show();
                                                              
                                                        }).size(100, 50);
                                                        fourteenDialog.show();
                                                    
                                                    }).size(100, 50);
                                                    thirteenDialog.show();
                                                      
                                                }).size(100, 50);
                                                twelveDialog.show();
                                                      
                                            }).size(100, 50);
                                            elevenDialog.show();
                                          
                                        }).size(100, 50);
                                        tenDialog.show();
                                      
                                    }).size(100, 50);
                                    nineDialog.show();
                                  
                                }).size(100, 50);
                                eightDialog.show();
                              
                            }).size(100, 50);
                            sevenDialog.show();
                          
                        }).size(100, 50);
                        sixDialog.show();
                      
                    }).size(100, 50);
                    fiveDialog.show();
                  
                }).size(100, 50);
                fourDialog.show();
              
            }).size(100, 50);
            threeDialog.show();
          
        }).size(100, 50);
        twoDialog.show();
      
    }).size(100, 50);
    oneDialog.show();
});
