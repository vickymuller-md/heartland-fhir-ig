Profile: HeartlandRemoteMonitoringObservation
Parent: Observation
Id: heartland-remote-monitoring-observation
Title: "HEARTLAND Remote Monitoring Observation"
Description: "Draft representation of body weight, blood pressure, or oxygen saturation. This profile does not encode or validate a clinical alert algorithm. A body-mass observation must not use a rate-of-change threshold as its numeric reference range. Time-window comparisons need dated source observations, matching units, and a separately governed clinical policy. Synthetic examples do not establish alert delivery, clinical assessment, or clinical outcomes."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
* ^publisher = "Vicky Muller Ferreira, MD"

* status 1..1 MS
* category 1..* MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains vsCat 1..1 MS
* category[vsCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code 1..1 MS
* code from HeartlandMonitoringObservationCodeVS (extensible)
* subject 1..1 MS
* subject only Reference(HeartlandPatient or Patient)
* effective[x] 1..1 MS
* effective[x] only dateTime or Period
* value[x] 0..1 MS
* value[x] only Quantity
* device 0..1 MS
* device only Reference(Device)
* referenceRange 0..* MS
* referenceRange.low 0..1
* referenceRange.high 0..1
* referenceRange.text 0..1 MS
