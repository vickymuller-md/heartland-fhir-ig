Instance: ObservationExampleWeightRedFlag
InstanceOf: HeartlandRemoteMonitoringObservation
Title: "Example: Synthetic Body Weight Observation"
Description: "Single synthetic body-mass reading. Historical resource ID retained for compatibility; this example does not establish a weight change, alert, delivery, or clinical response. A rate-of-change threshold is not a numeric reference range for body mass."
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

* note[0].text = "This single synthetic reading does not establish a change over time. Compare dated source measurements in compatible units under a separately governed clinical policy; no alert threshold or clinical action is asserted here."
