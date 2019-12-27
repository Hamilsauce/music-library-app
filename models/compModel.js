class Comp {
    constructor(title, description, author, type, genre){
        this.title = title,
            this.description = description,
            this.author = author,
            this.type = type,
            this.genre = genre
    }
    attributes = {
        key: '',
        timeSig: '',
        instruments: '',
        chords: '',
        structure: '',
        notes: ''
    }
    dateCreated = new Date()
    status = ''
    notes = ''
    relatedComps = '' //groups of comps that are related (rewrites, expansions, follow ups, etc)
    audioFiles = [{
        filename: '',
        fileType: '',
        url: '',
        duration: '',
        datePublished: ''
    }]
    compDocs = [{
        filename: '',
        fileType: '',
        url: '',
    }]
    mutateData() {
        //return do some stuff;
    }

    exposeData() {
        //return do some stuff;
    }
}
