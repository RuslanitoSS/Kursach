import React from 'react'
import './CreateEventRoute.scss'

/* 
class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    short_description = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(blank=True, null=True)
    participants = models.ManyToManyField(CustomUser, related_name='events')
 */
export default function CreateEventRoute() {
    return (
        <div className="wrapper">
            <div className="create-event search">

            </div>
        </div>
    )
}
