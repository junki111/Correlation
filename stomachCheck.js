//create a journal for the diarrhea
let journal = [];

let addEntry = (events, squirel) => {
    journal.push({events, squirel});
};

//phi for checking of correlation
let phi = table => {
    return (table[3]*table[0] - table[2]*table[1])/
            Math.sqrt((table[3]+table[2])*
                      (table[3]+table[1])*
                      (table[0]+table[2])*
                      (table[0]+table[1]));
};

//create a table for an event
function tableFor(event, journal){
    let table = [0,0,0,0];
    for(let i=0; i<journal.length; i++){
        let entry= journal[i], index=0;
        if(entry.events.includes(event)) index+=1;
        if(entry.squirrel) index+=2;
        table[index]+=1;
    }
    return table;
}

//Get the list of events
function journalEvents(journal){
    events = [];
    for(let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

//Checking for the correlation for every type of event using the phi formula
for(let event of journalEvents(JOURNAL)){
    console.log(`${event}:${phi(tableFor(event, JOURNAL))}`);
}