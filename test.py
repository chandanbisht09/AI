import spacy

nlp_ner = spacy.load("output/model-best")


doc = nlp_ner("Current medicines: Paracetamol 4g daily Naproxen 500 mg BID I have given Mr. Rampling advice regarding [Medicine] and advice that [Medicine] will be ceased prior to scheduled surgery/will be tapered to [Dose] prior to scheduled surgery/cannot be stopped or reduced and will therefore require further consideration. Full Blood Count:")

colors = {"PATHOGEN": "#F67DE3", "MEDICINE": "#7DF6D9", "MEDICALCONDITION":"#a6e22d"}
options = {"colors": colors} 

#spacy.displacy.render(doc, style="ent", options= options, jupyter=False)

for ent in doc.ents:
    print(ent.label_ +" | "+ ent.text)