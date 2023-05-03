Ruby’s [Enumerable#partition](https://ruby-doc.org/3.2.2/Enumerable.html#method-i-partition) is useful for dividing an existing array into two separate arrays.

### Before
```ruby
def call(appointments)
  appointments_today = []
  appointments_next_week = []

  appointments.each do |appointment|
    if appointment.starts_at.to_date == Date.current
      appointments_today << appointment
    else
      appointments_next_week << appointment
    end
  end
end
```

### After
```ruby
def call(appointments)
  appointments_today, appointments_next_week = appointments.partition do |appointment|
    appointment.starts_at.to_date == Date.current
  end
end
```