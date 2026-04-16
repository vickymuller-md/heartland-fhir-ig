Instance: ObservationExampleWeightRedFlag
InstanceOf: HeartlandRemoteMonitoringObservation
Title: "Example: Body Weight Observation with Red-Flag Threshold"
Description: "Body weight observation for PatientExampleRural captured via Track B (telephone-reported) showing a +1.2 kg gain in 24 hours. Reference range encodes the HEARTLAND default red-flag threshold (>=0.9 kg in 24 hours triggers clinician outreach per the human filter principle)."
Usage: #example

* status = #final
* category[vsCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code = http://loinc.org#29463-7 "Body weight"
* subject = Reference(PatientExampleRural)
* effectiveDateTime = "2026-04-16T08:15:00-05:00"
* valueQuantity.value = 79.4
* valueQuantity.unit = "kg"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #kg

* referenceRange[0].high.value = 0.9
* referenceRange[0].high.unit = "kg/d"
* referenceRange[0].high.system = "http://unitsofmeasure.org"
* referenceRange[0].high.code = #kg/d
* referenceRange[0].text = "HEARTLAND red flag (default): weight gain >=0.9 kg (~2 lb) in 24 hours triggers clinician telephone assessment before ED referral."
